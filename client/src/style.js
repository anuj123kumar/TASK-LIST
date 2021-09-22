import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirectionn: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))