import Edit from './edit';
import Save from './save';
import './style.scss';

wp.blocks.registerBlockType('jonimms-blocks/current-date', {
    edit: Edit,
    save: Save,
});
