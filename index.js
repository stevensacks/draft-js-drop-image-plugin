import createStore from './utils/createStore';
import decorateComponentWithProps from 'decorate-component-with-props';
import FileDrag from './FileDrag';

const createPlugin = () => {
    const store = createStore({});

    const dragProps = {
        store
    };

    return {
        initialize: ({ getEditorState, setEditorState }) => {
            store.updateItem('getEditorState', getEditorState);
            store.updateItem('setEditorState', setEditorState);
        },
        FileDrag: decorateComponentWithProps(FileDrag, dragProps)
    };
};

export default createPlugin;
