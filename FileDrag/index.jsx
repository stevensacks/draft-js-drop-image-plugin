import {AtomicBlockUtils, Entity} from 'draft-js';
import React from 'react';
import styles from './index.scss';

export default class FileDrag extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        isOver: false,
    };

    handleDragOver = event => {
        event.preventDefault();
        this.setState({
            isOver: true
        });
    };

    handleDragLeave = event => {
        event.preventDefault();
        this.setState({
            isOver: false
        });
    }

    handleDrop = event => {
        this.handleDragLeave(event);
        this.handleChange(event);
    };

    handleChange(event) {
        const reader = new FileReader();
        reader.onload = e => {
            const editorState = this.props.store.getItem('getEditorState')();
            const entityKey = Entity.create('image', 'IMMUTABLE', {src:e.target.result});
            this.props.store.getItem('setEditorState')(
                AtomicBlockUtils.insertAtomicBlock(
                    editorState,
                    entityKey,
                    ' '
                )
            );
        };
        reader.readAsDataURL(event.dataTransfer.files[0]);
    }

    render() {
        const className = this.state.isOver ? `${styles.outline} ${styles.hover}` : styles.outline;
        return (
            <div className={className}>
                <div className={styles.drop} onDragOver={this.handleDragOver.bind(this)} onDrop={this.handleDrop.bind(this)}>
                    <input name="Drop Image" type="file" accept="image/*" onDragLeave={this.handleDragLeave.bind(this)} onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

FileDrag.propTypes = {
    store: React.PropTypes.object
};
