import { connect } from "react-redux";
import {
  selectSourceLang,
  selectTargetLang
} from "../../actions/languages.actions";
import {
  sourceLang,
  targetLang
} from "../../selectors/languages.selector.js";
import LanguageSelector from "./languageSelector";

const mapStateToProps = (state) => ({
  sourceLang: sourceLang(state),
  targetLang: targetLang(state)
});

const mapDispatchToProps = (dispatch) => ({
  selectSourceLang: (options) => dispatch(selectSourceLang(options)),
  selectTargetLang: (options) => dispatch(selectTargetLang(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector);
