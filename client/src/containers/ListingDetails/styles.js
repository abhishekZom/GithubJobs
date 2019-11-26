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
        textAlign: 'left',
        position: 'relative'
    },
    description: {
        maxHeight: '300px',
        overflow: 'auto'
    },
    applyButton: {
        minWidth: '100px',
        position: 'absolute',
        right: '50px',
        top: '80px'
    },
    applyLink: {
        color: '#eeeeee',
        textDecoration: 'none'
    }
}

export default styles;