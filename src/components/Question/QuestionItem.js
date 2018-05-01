import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './QuestionItem.css';
import Author from '../Author/Author';

class Question extends Component {
    static propTypes = {
        author: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        answers: PropTypes.number,
        tags: PropTypes.arrayOf(PropTypes.string),
        onTagClick: PropTypes.func,
    };

    static defaultProps = {
        author: undefined,
        title: undefined,
        answers: undefined,
        img: undefined,
        tags: undefined,
        onTagClick: () => {
        },
    };

    renderTags = () => {
        const { tags, onTagClick } = this.props;
        return tags.map((tag, i) => (
            <button
                key={i}
                data-tag={tag}
                onClick={onTagClick}
                className={cx(s.tag, 'btn btn-default')}
            >{tag}
            </button>
        ));
    };

    render () {
        const { author, title, answers, img } = this.props;
        return (
            <tr className={s.root}>
                <td><Author author={author} imgUrl={img} /></td>
                <td>{title}</td>
                <td>{answers}</td>
                <td>{this.renderTags()}</td>
            </tr>
        );
    }
}

export default Question;