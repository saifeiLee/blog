---
title: Find Anagrams in String 算法总结
---

代码

```python
from collections import Counter

class Solution(object):
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        res = []
        sCounter = Counter(s[:len(p) - 1])
        pCounter = Counter(p)
        for i in range(len(p) - 1, len(s)):
            sCounter[s[i]] += 1     # include a new char in window
            if sCounter == pCounter:
                res.append(i - len(p) + 1)
            sCounter[s[i - len(p) + 1]] -= 1
            if sCounter[s[i - len(p) + 1]] == 0:
                del sCounter[s[i - len(p) + 1]]
        return res
```

_注意细节_：

我最初的实现方法是 初始化`sCounter`时 令 `list` 长度和 `p` 相同，然后在`for` 循环当中先进行`sCounter`和`pCounter`的比较，再将窗口后移一个字符。但是这样会出错，原因在哪儿呢？？？

原因在于：按照以上代码逻辑，如果先比较再右移窗口，那么最后一次右移之后循环结束，没有参与比较，也就是说少考虑的一种情况。修改方法：

1. 按照以上代码，初始化窗口`sCounter`长度为 `len(p) - 1`, 然后先右移添加一个字符再比较， 这样即可保证不遗漏最后一种情况。
2. 按照我的第一种思路，但是要在循环结束后再额外比较一次`sCounter`和`pCounter`。

*总结*：
要注意细节！
