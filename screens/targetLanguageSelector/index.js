import { connect } from "react-redux";
import { selectTargetLang } from "../../actions/languages.actions";
import { targetLang } from "../../selectors/languages.selector.js";
import TargetLanguageSelector from "./targetLanguageSelector";

const mapStateToProps = (state) => ({
  targetLang: targetLang(state)
});

const mapDispatchToProps = (dispatch) => ({
  selectTargetLang: (options) => dispatch(selectTargetLang(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetLanguageSelector);
