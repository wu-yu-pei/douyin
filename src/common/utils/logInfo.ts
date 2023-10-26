function getSpace(size) {
  return new Array(size).fill(' ').join('');
}

function get_(size) {
  return new Array(size).fill('-').join('');
}

/**
 * default style
 *
 * use Age :
 *
 * new DefaultStyle({
 *  name:node_project_template,
 *  version:v1.0.0,
 *  port:8888,
 *  env:dev
 * })
 */

export default class DefaultLog {
  lineLength = 60;

  labelNameLength = 16;

  title = 'project info';

  leftStyle = '|-> ';

  rightStyle = ' <-|';

  info: any;

  constructor(info) {
    this.info = info;
    this.log();
  }

  log() {
    console.log(this.getLog());
  }

  getLog() {
    let log = '';

    const firstLine = this.getFirstLine();
    const lastLine = this.getLastLine();

    for (const key in this.info) {
      log += this.getLine(key, this.info[key]);
    }

    return `\n${firstLine}${log}${lastLine}`;
  }

  getLabel(labelName) {
    const length = this.labelNameLength - this.leftStyle.length - labelName.length;
    const space = getSpace(length - 1);

    return `${this.leftStyle}${labelName}${space}:`;
  }

  getContent(content) {
    const length = this.lineLength - this.labelNameLength - this.rightStyle.length - String(content).length;
    const space = getSpace(length);

    return `${content}${space}${this.rightStyle}`;
  }

  getLine(labelName, content) {
    return `${this.getLabel(labelName)}${this.getContent(content)}\n`;
  }

  getFirstLine() {
    const length = this.lineLength - this.title.length - this.leftStyle.length - this.rightStyle.length;
    const space = get_(length / 2);

    return `${this.leftStyle}${space}${this.title}${space}${this.rightStyle}\n`;
  }

  getLastLine() {
    const length = this.lineLength - this.leftStyle.length - this.rightStyle.length;
    const space = get_(length);

    return `${this.leftStyle}${space}${this.rightStyle}\n`;
  }
}
