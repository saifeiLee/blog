#!/bin/sh
curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7a9039ed-3df3-45f2-895f-c07673e4759f' \
   -H 'Content-Type: application/json' \
   -d '
   {
        "msgtype": "text",
        "text": {
            "content": "温馨提醒：自由日啊自由日，大家早点回吧",
            "mentioned_list":["@all"]
        }
   }'
