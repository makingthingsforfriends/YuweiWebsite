/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {BsLinkedin } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/yuwei-shen-1119aa12a/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/makingthingsforfriends/" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/devsuoa" target="_blank"><IoIosPeople/></a>
    </div>
  )
}

export default HeaderSocials