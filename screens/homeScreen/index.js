import { connect } from "react-redux";
import { getTranslation } from "../../actions/api/translate";
import {
  sourceLang,
  targetLang
} from "../../selectors/languages.selector.js";
import { activeTranslation, isFetching, translation, translationHistory } from "../../selectors/translation.selector.js"
import HomeScreen from "./homeScreen";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  activeTranslation: activeTranslation(state),
  isFetching: isFetching(state),
  sourceLang: sourceLang(state),
  state,
  targetLang: targetLang(state),
  translation: translation(state),
  translationHistory: translationHistory(state)
});

const mapDispatchToProps = (dispatch) => ({
  getTranslation: (options) => dispatch(getTranslation(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
