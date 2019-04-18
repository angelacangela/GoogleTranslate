import { connect } from "react-redux";
import { getTranslation } from "../../actions/api/translate";
import {
  sourceLang,
  targetLang
} from "../../selectors/languages.selector.js";
import { translation } from "../../selectors/translation.selector.js"
import HomeScreen from "./homeScreen";

const mapStateToProps = (state) => ({
  sourceLang: sourceLang(state),
  targetLang: targetLang(state),
  translation: translation(state)
});

const mapDispatchToProps = (dispatch) => ({
  getTranslation: (options) => dispatch(getTranslation(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
