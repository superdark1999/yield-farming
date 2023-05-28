import React, { useLayoutEffect, useRef } from 'react'

const AutoScaleContain = ({ children, style = undefined }) => {
  const autoScaleRef = useRef()
  useLayoutEffect(() => {
    if (autoScaleRef.current) {
      const { parentElement } = autoScaleRef.current
      if (!autoScaleRef.current.parentElement) return

      const scaleFitParent = ({ width: parentWidth, height: parentHeight }) => {
        if (!autoScaleRef.current) return
        const childrenHeight = autoScaleRef.current.children?.[0]?.offsetHeight
        const childrenWidth = autoScaleRef.current.children?.[0]?.offsetWidth

        if (!parentHeight || !childrenHeight || !childrenWidth || !parentWidth) return

        const scaleX = parentWidth / childrenWidth
        const scaleY = parentHeight / childrenHeight
        const scale = Math.min(scaleX, scaleY)

        autoScaleRef.current.style.transform = `scale(${scale})`
        autoScaleRef.current.style.width = childrenWidth * scale + 'px'
        autoScaleRef.current.style.height = childrenHeight * scale + 'px'
      }

      const resizeObserver = new ResizeObserver((el) => {
        const { width, height } = el[0].contentRect
        scaleFitParent({ width, height })
      })
      resizeObserver.observe(parentElement)
      scaleFitParent({
        width: parentElement.offsetWidth,
        height: parentElement.offsetHeight,
      })

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [])

  return (
    <div className="auto-scale" style={{ transformOrigin: 'top left', ...style }} ref={autoScaleRef}>
      {children}
    </div>
  )
}

export default AutoScaleContain
