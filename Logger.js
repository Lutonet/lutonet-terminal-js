export default class Logger {
  constructor(terminal) {
    if (!terminal) {
      console.log("Input reader needs a Terminal object in its constructor");
      return;
    }
    this.log = (props) => {
      console.log(props);
    };
  }

  loadData = () => {};

  storeData = () => {};
}
/* 
  log(type, { logObject })
  logError({errorObject})
  logError(errorText)
  logInfo()

  type = Critical, Exception, Error, Warning, Information, Debug, Other
  

  
*/
