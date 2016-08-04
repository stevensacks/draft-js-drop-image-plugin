import {Entity} from 'draft-js';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import styles from './index.scss';

const Image = props => {
    const entity = Entity.get(props.block.getEntityAt(0));
    const {src} = entity.getData();
    return (
        <div className={styles.image}>
            <img src={src}/>
        </div>
    );
};

Image.propTypes = {
    block: ImmutablePropTypes.record
};

export default Image
