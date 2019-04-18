import { connect } from "react-redux";
import { selectSourceLang } from "../../actions/languages.actions";
import { sourceLang } from "../../selectors/languages.selector.js";
import SourceLanguageSelector from "./sourceLanguageSelector";

const mapStateToProps = (state) => ({
  sourceLang: sourceLang(state)
});

const mapDispatchToProps = (dispatch) => ({
  selectSourceLang: (options) => dispatch(selectSourceLang(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceLanguageSelector);
