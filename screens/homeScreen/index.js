import { connect } from "react-redux";
import { getTranslation } from "../../actions/api/translate";
import HomeScreen from "./homeScreen";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getTranslation: (options) => dispatch(getTranslation(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
