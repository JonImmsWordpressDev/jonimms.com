import Edit from './edit';
import Save from './save';
import './style.scss';



wp.blocks.registerBlockType('jonimms-blocks/website-copyright', {
    edit: Edit,
    save: Save,
});
