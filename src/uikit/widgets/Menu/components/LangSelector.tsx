import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'
import Text from '../../../components/Text/Text'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Button from '../../../components/Button/Button'
import * as IconModule from '../icons'
import { LangType } from '../types'
import MenuButton from './MenuButton'

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }
const { LanguageIcon } = Icons

interface Props {
  currentLang: string
  langs: LangType[]
  setLang: (lang: LangType) => void
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <BoxLanguage>
    <Dropdown
      position="top-right"
      target={
        <Button variant="text" startIcon={<LanguageIcon color="rgb(152, 148, 148)" width="24px" />}>
          <Text color="rgb(152, 148, 148)">{currentLang?.toUpperCase()}</Text>
        </Button>
      }
    >
      {langs.map((lang) => (
        <MenuButton
          key={lang.code}
          fullWidth
          onClick={() => setLang(lang)}
          className="menu-button"
          // Safari fix
          style={{ minHeight: '32px', height: 'auto' }}
        >
          {lang.language}
        </MenuButton>
      ))}
    </Dropdown>
  </BoxLanguage>
)

const BoxLanguage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang)
