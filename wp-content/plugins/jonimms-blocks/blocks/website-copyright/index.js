import Edit from './edit';
import Save from './save';

wp.blocks.registerBlockType('jonimms-blocks/website-copyright', {
    edit: Edit,
    save: Save,
});
