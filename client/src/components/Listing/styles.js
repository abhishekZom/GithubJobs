import variables from '../../utils/variables';

const styles = {
    container: {
        position: 'relative',
        marginTop: '5px',
        color: variables.SECONDARY_COLOR,
        backgroundColor: ` ${variables.TERTIARY_BG}`,
        boxShadow: '1px 1px 4px 2px #777777',
        textAlign: 'left',
    },
    companyName: {
        maxWidth: '35%',
        display: 'inline-block'
    },
    jobTitle: {
        display: 'block',
        fontWeight: 'bold',
        color: variables.COLOR_BLUE1,
        marginBlockStart: '5px',
        marginBlockEnd: '5px',
        maxWidth: '45%',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    jobType: {
        color: variables.COLOR_GREEN1,
    },
    jobLocation: {
        position: 'absolute',
        top: '23px',
        right: '20px',
    },
    createdAt: {
        position: 'absolute',
        top: '48px',
        right: '20px'
    }
}

export default styles;