import { NextFunction, Request, Response } from 'express';
import { isNumber } from '../common/utils/index';
import { ParamsPosition } from '../common/enum';
import BasePipe from '../common/base/baseVerify.pipe';
import config from '../../config';
import crypto from 'crypto';

class VerifyParamsPipe extends BasePipe {
  // 参数校验 必填参数
  required(paramsList: string[], paramsPosition = ParamsPosition.BODY) {
    return (req: Request, res: Response, next: NextFunction) => {
      const message = [];

      for (let i = 0; i < paramsList.length; i++) {
        if (paramsPosition === ParamsPosition.REQ) {
          if (!req[paramsList[i]]) {
            message.push(`${paramsList[i]} 参数不能为空`);
          }
        } else {
          if (!req[paramsPosition][paramsList[i]]) {
            message.push(`${paramsList[i]} 参数不能为空`);
          }
        }
      }

      this.verifyResultMessage(message, next);
    };
  }

  // 参数检验 是否为数字
  mustNumber(paramsList: string[], paramsPosition = ParamsPosition.BODY) {
    return (req: Request, res: Response, next: NextFunction) => {
      const message = [];
      for (let i = 0; i < paramsList.length; i++) {
        if (paramsPosition === ParamsPosition.REQ) {
          if (!isNumber(req[paramsList[i]])) {
            message.push(`${paramsList[i]} 应该为数字`);
          }
        } else {
          if (!isNumber(req[paramsPosition][paramsList[i]])) {
            message.push(`${paramsList[i]} 应该为数字`);
          }
        }
      }

      this.verifyResultMessage(message, next);
    };
  }

  // 可选类型参数校验
  optionalMustNumber(paramsList: string[], paramsPosition = ParamsPosition.BODY) {
    return (req: Request, res: Response, next: NextFunction) => {
      const message = [];
      for (let i = 0; i < paramsList.length; i++) {
        if (paramsPosition === ParamsPosition.REQ) {
          if (req[paramsList[i]] && !isNumber(req[paramsList[i]])) {
            message.push(`${paramsList[i]} 应该为数字`);
          }
        } else {
          if (req[paramsPosition][paramsList[i]] && !isNumber(req[paramsPosition][paramsList[i]])) {
            message.push(`${paramsList[i]} 应该为数字`);
          }
        }
      }

      this.verifyResultMessage(message, next);
    };
  }

  // 校验签名
  verifySign(req: Request, res: Response, next: NextFunction) {
    next();

    //   const { 'x-timestamp': timestamp, 'x-msg-type': msgType, 'x-nonce-str': nonce, 'x-roomid': roomid, 'x-signature': signature } = req.headers as any;

    //   const args = {
    //     'x-timestamp': timestamp,
    //     'x-msg-type': msgType,
    //     'x-nonce-str': nonce,
    //     'x-roomid': roomid,
    //   };
    //   const newkey: any = (Object.keys(args) as []).sort();

    //   let str = '';
    //   for (const element of newkey) {
    //     //遍历newkey数组
    //     str += element + '=' + args[element] + '&';
    //   }

    //   str = str.substring(0, str.length - 1) + JSON.stringify(req.body) + config.secret;

    //   const md5 = crypto.createHash('md5');

    //   const base64str = md5.update(str, 'utf8').digest('base64');

    //   if (base64str === signature) {
    //     next();
    //   } else {
    //     res.status(200).send({ msg: 'error: 签名检验失败' });
    //   }
  }
}

export default new VerifyParamsPipe();
