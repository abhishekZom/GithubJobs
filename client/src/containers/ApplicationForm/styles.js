import variables from '../../utils/variables';

const styles = {
    wrapper: {
        paddingTop: '70px',
        paddingBottom: '100px'
    },
    container: {
        minHeight: '400px',
        maxWidth: '60%',
        color: variables.SECONDARY_COLOR,
        backgroundColor: ` ${variables.TERTIARY_BG}`,
        boxShadow: '1px 1px 4px 2px #777777',
        margin: '50px auto',
        marginBottom: '100px',
        padding: '30px',
        textAlign: 'center',
        position: 'relative'
    },
    name: {
        minWidth: '300px',
        margin: '10px 0px'
    },
    email: {
        minWidth: '300px',
        margin: '10px 0px'
    },
    cover: {
        minWidth: '300px',
        margin: '10px 0px'
    },
    file: {
        minWidth: '300px',
        margin: '10px 0px'
    },
    submitBtn: {
        margin: '30px 0px',
        minWidth: '200px'
    }
};

export default styles;
