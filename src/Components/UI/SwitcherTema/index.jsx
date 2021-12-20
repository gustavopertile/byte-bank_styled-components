import React from 'react'
import ThemeOn from '../../../assets/images/themeOn.svg'
import ThemeOff from '../../../assets/images/themeOff.svg'
import { Icone } from '..'

const claro = <Icone src={ThemeOn} alt="Tema Claro" />
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />

// eslint-disable-next-line import/no-anonymous-default-export
export default ({tema}) => (tema ? escuro : claro)