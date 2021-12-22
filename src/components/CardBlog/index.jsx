import React from 'react'
import propTypes from 'prop-types'
import User from '@components/User'
import './index.pcss'
import { t } from 'i18next'

const CardBlog = ({
  image,
  type = 'Article',
  link = '/',
  title = 'Guide for designing better mobile apps typography',
  description = 'In this article, I won’t talk about the general concepts of typography, which can be used both in print',
  author,
  authorImage,
  label
}) => {
  return (
    <div className="CardBlog">
      <a href={link}>
        <img className="CardBlog__Image" src={image} alt={title} />
      </a>
      <div className="CardBlog__Content">
        <small className="CardBlog__Type">{t('cardBlog.type')}</small>
        <a className="CardBlog__Link" href={link}>
          <b className="CardBlog__Title">{t('cardBlog.title')}</b>
        </a>
        <p className="CardBlog__Description">{t('cardBlog.description')}</p>
      </div>
      <div className="CardBlog__Footer">
        <User image={authorImage} name={author} label={label} />
      </div>
    </div>
  )
}

CardBlog.propTypes = {
  image: propTypes.string,
  type: propTypes.string,
  link: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  author: propTypes.string,
  authorImage: propTypes.string,
  label: propTypes.string
}

export default CardBlog
