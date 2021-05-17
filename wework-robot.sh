#!/bin/sh
curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7a9039ed-3df3-45f2-895f-c07673e4759f' \
   -H 'Content-Type: application/json' \
   -d '
   {
        "msgtype": "text",
        "text": {
            "content": "Hey～俊男靓女们, Geek Day不加班,记得多做点自己喜欢的事儿哦。",
            "mentioned_list":["@all"]
        }
   }'
