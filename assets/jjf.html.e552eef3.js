import{_ as n,o as a,c as l,b as p,a as e,r as o}from"./app.66ed9849.js";const c={},r=e(`<h1 id="\u5927\u5510\u5C06\u519B\u5E9C" tabindex="-1"><a class="header-anchor" href="#\u5927\u5510\u5C06\u519B\u5E9C" aria-hidden="true">#</a> \u5927\u5510\u5C06\u519B\u5E9C</h1><h2 id="\u95E8\u6D3E\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u95E8\u6D3E\u7B80\u4ECB" aria-hidden="true">#</a> \u95E8\u6D3E\u7B80\u4ECB</h2><p>\u5510\u9AD8\u7956\u674E\u6E0A\u7531\u592A\u539F\u8D77\u5175\uFF0C\u77ED\u77ED\u51E0\u5341\u5E74\u95F4\u6253\u4E0B\u4E86\u674E\u5BB6\u5929\u4E0B\uFF0C\u4E0D\u9760\u7740\u79E6\u738B<br> \u674E\u4E16\u6C11\u624B\u4E0B\u7F51\u7F57\u7684\u4E00\u6279\u6587\u4EBA\u6B66\u5C06\u662F\u4E0D\u53EF\u80FD\u7684\u3002\u56E0\u6B64\u5F85\u9AD8\u7956\u4F20\u4F4D\u4E8E\u592A\u5B97<br> \u674E\u4E16\u6C11\u65F6\uFF0C\u5F53\u5E74\u79E6\u738B\u624B\u4E0B\u4F17\u5C06\u81EA\u7136\u662F\u5404\u81EA\u5C01\u738B\u3002</p><p>\u8FD9\u73ED\u5C06\u9886\u4E2D\u53C8\u4EE5\u79E6\u743C\uFF0C\u7A0B\u54AC\u91D1\uFF0C\u548C\u5C09\u8FDF\u606D\u4E09\u4EBA\u7ACB\u529F\u6700\u591A\u3002\u4E09\u4EBA\u90FD\u66FE\u6570<br> \u6B21\u6551\u8FC7\u592A\u5B97\u6027\u547D\u3002\u4E3A\u4E86\u611F\u8C22\u4E09\u5458\u5C06\u9886\uFF0C\u592A\u5B97\u7279\u65E8\u4EE4\u79E6\u743C\u5F00\u6D3E\u6536\u5F92\uFF0C\u5E76<br> \u4E3A\u671D\u5EF7\u5BFB\u53EF\u9020\u4E4B\u624D\u3002\u5F53\u5E74\u79E6\u738B\u624B\u4E0B\u5176\u4ED6\u4F17\u5C06\u4E5F\u81EA\u7136\u524D\u6765\u6367\u573A\uFF0C\u8FD9\u5927\u5510<br> \u5C06\u519B\u5E9C\u679C\u7136\u662F\u529E\u7684\u597D\u751F\u5174\u65FA\uFF0C\u771F\u7684\u662F\u4EBA\u624D\u6D4E\u6D4E\u3002</p><h2 id="\u5730\u56FE\u548C\u5411\u5BFC" tabindex="-1"><a class="header-anchor" href="#\u5730\u56FE\u548C\u5411\u5BFC" aria-hidden="true">#</a> \u5730\u56FE\u548C\u5411\u5BFC</h2><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">               \u9752\u9F99\u5927\u8857</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                  |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                \u5C06\u519B\u5E9C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                  |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">   \u8305\u5C4B         \u7EC3\u6B66\u573A-\u9A6C\u53A9</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    |         /   |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  \u6A21\u7CCA\u4E2D...\u5BA2\u623F-\u7EC3\u6B66\u573A-\u5175\u5668\u67B6</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                  |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">           \u504F\u5385--\u6B63\u5385--\u5BB4\u5385</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                  |       \\</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      \u4E66\u623F        |        \u5C0F\u8DEF</span></span>
<span class="line"><span style="color:#D8DEE9FF;">       |          |          \\</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u897F\u53A2\u4E8C\u697C    \u77F3\u5B50\u8DEF       \u5C0F\u8DEF</span></span>
<span class="line"><span style="color:#D8DEE9FF;">       \u2191      /             |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u897F\u53A2\u9601\u697C-\u51C9\u4EAD           \u53A8\u623F</span></span>
<span class="line"><span style="color:#D8DEE9FF;">               \\          /</span></span>
<span class="line"><span style="color:#D8DEE9FF;">              \u82B1\u56ED------\u82B1\u56ED</span></span>
<span class="line"><span style="color:#D8DEE9FF;">               |         |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">              \u82B1\u56ED------\u82B1\u56ED  \u4E66\u623F</span></span>
<span class="line"><span style="color:#D8DEE9FF;">              /            \\  |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">           \u77F3\u5B50\u8DEF          \u4E1C\u53A2\u623F</span></span>
<span class="line"><span style="color:#D8DEE9FF;">             |</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5E72\u6208\u9685-\u65E0\u79C1\u8F69-\u53F9\u5175\u658B</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u6CE8\uFF1A\uFF0B\u7684se\u53CAnw\u65B9\u5411\u4E24\u680B\u697C\uFF0C\u9752\u9F99\u5927\u8857\u65C1\u8FB9\u7684\u5175\u8425\u5747\u5C5E\u4E8E\u5C06\u519B\u5E9C\uFF0C\u6B64\u5904\u672A\u6CE8\u660E</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62DC\u5E08\u5FC5\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u62DC\u5E08\u5FC5\u8BFB" aria-hidden="true">#</a> \u62DC\u5E08\u5FC5\u8BFB</h2><p>\u56E0\u4E3A\u5F53\u671D\u592A\u5B97\u4EB2\u81EA\u4EE4\u79E6\u743C\u5F00\u6D3E\u6536\u5F92\uFF0C\u8FD9\u5C06\u519B\u5E9C\u7684\u91D1\u94B1\u6765\u6E90\u662F\u4E0D\u6210\u95EE\u9898\u3002<br> \u6D3E\u4E2D\u5F1F\u5B50\u5403\u7684\u3001\u7A7F\u7684\u3001\u7528\u7684\u5168\u90FD\u5305\u5728\u4E86\u79E6\u743C\u8EAB\u4E0A\u3002\u8FD9\u4E3A\u521A\u6765\u95EF\u4E16\u754C\u7684<br> \u4EBA\u4EEC\u63D0\u4F9B\u4E86\u5F88\u591A\u7684\u65B9\u4FBF\u3002\u5C06\u519B\u5E9C\u4E2D\u6709\u4E0D\u5C11\u6253\u62F3\u7EC3\u6C14\u7684\u6728\u6869\u7B49\u7269\uFF0C\u4E5F\u5BF9<br> \u4E0D\u4E60\u60EF\u4E8E\u4ECE\u6253\u67B6\u4E2D\u5B66\u4E60\u7684\u73A9\u5BB6\u5927\u6709\u5E2E\u52A9\u3002</p><p>\u5C06\u519B\u5E9C\u7684\u5E08\u7236\u4EEC\u90FD\u662F\u5728\u6C99\u573A\u4E2D\u51FA\u751F\u5165\u6B7B\u7684\uFF0C\u56E0\u6B64\u8FD9\u6B66\u529F\u662F\u7ECF\u8FC7\u4E86\u5343\u9524<br> \u767E\u7EC3\uFF0C\u679C\u7136\u7834\u7EFD\u6781\u5C11\u3002\u5C24\u5176\u662F\u7A0B\u54AC\u91D1\u68A6\u4E2D\u5B66\u6765\u7684\u5BA3\u82B1\u4E09\u65A7\uFF0C\u4F7F\u51FA\u6765\u662F<br> \u5A01\u52BF\u60CA\u4EBA\uFF0C\u96BE\u4EE5\u5339\u654C\u3002\u4F46\u7F8E\u4E2D\u4E0D\u8DB3\u7684\u662F\uFF0C\u5C06\u519B\u5E9C\u5927\u591A\u6570\u662F\u51E1\u592B\u4FD7\u5B50\uFF0C<br> \u8FD9\u6CD5\u672F\u5374\u4E0D\u662F\u4ED6\u4EEC\u7684\u62FF\u624B\u597D\u620F\u4E86\u3002\u82E5\u60F3\u5B66\u597D\u6CD5\u672F\uFF0C\u5165\u95E8\u5F1F\u5B50\u5148\u9700\u5BFB\u627E<br> \u8881\u5929\u7F61\uFF1B\u60F3\u8981\u66F4\u4E0A\u4E00\u5C42\u697C\uFF0C\u5219\u9700\u6709\u7A0B\u54AC\u91D1\u90A3\u79CD\u7F18\u5206\u4E86\u3002</p><p>\u60F3\u5728\u5C06\u519B\u5E9C\u4E2D\u7EC3\u51FA\u4E00\u624B\u597D\u529F\u592B\uFF0C\u8FD9\u8182\u529B\u5F97\u9AD8\uFF0C\u800C\u4E14\u6839\u9AA8\u8981\u597D\u3002\u9664\u6B64\u4E4B<br> \u5916\u5404\u4E2A\u4E0D\u540C\u7684\u5E08\u7236\u8FD8\u53EF\u80FD\u6709\u4E0D\u540C\u7684\u8981\u6C42\uFF0C\u90A3\u5C31\u6709\u5F85\u5165\u95E8\u5F1F\u5B50\u81EA\u5DF1\u53BB\u627E<br> \u53BB\u95EE\u4E86\u3002</p><h2 id="\u4EBA\u7269\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4EBA\u7269\u7B80\u4ECB" aria-hidden="true">#</a> \u4EBA\u7269\u7B80\u4ECB</h2><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\uFF11\uFF0E\u795E\u4ED9\u3000\u3000\u3000\u3000\u767D\u53D1\u8001\u4EBA  \u6536\u5F92\u6761\u4EF6\uFF1A\u6709\u7F18\u4EBA</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\uFF12\uFF0E\u5175\u9A6C\u5927\u5143\u5E05\u3000\u79E6\u743C      \u6536\u5F92\u6761\u4EF6\uFF1A\u6B66\u5B66100k</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u5175\u9A6C\u5927\u90FD\u7763\u3000\u5C09\u8FDF\u606D    \u6536\u5F92\u6761\u4EF6\uFF1A\u540E\u5929\u80C6\u8BC625\uFF0C\u8182\u529B+\u7A7A\u624B/10-2\u8FBE\u523020</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                                       \u62C6\u4E86\u9189\u661F\u697C\u7ED9\u4ED6\u67F1\u5B50</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u5F00\u56FD\u5143\u52CB\u3000\u3000\u7F57\u6210      \u6536\u5F92\u6761\u4EF6\uFF1A\u51FB\u8D25\u7F57\u6210</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u94A6\u5929\u76D1\u3000\u3000\u3000\u8881\u5929\u7F61    \u6536\u5F92\u6761\u4EF6\uFF1A\u5C06\u519B\u5E9C\u5F1F\u5B50\u9001\u76D2\u996D\u540E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u5927\u5C06\u519B\u3000\u3000\u3000\u7A0B\u54AC\u91D1    \u6536\u5F92\u6761\u4EF6\uFF1A\u540E\u5929\u80C6\u8BC630\uFF0C\u8182\u529B30</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                                      \uFF08\u82E5\u4F1Aunarmed\uFF0C\u52A0\u4E0A\u5176\u7EA7\u522B/10-2)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u4E5D\u95E8\u63D0\u7763\u3000\u3000\u859B\u4EC1\u8D35</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        \u5EFA\u738B        \u674E\u5143\u5409    \u4E3A\u4EBA\u6B79\u6BD2\uFF0C\u867D\u4E0D\u5C5E\u5C06\u519B\u5E9C\uFF0C\u4F46\u5374\u613F\u610F\u4F20\u6388\u6BD2\u672F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\uFF13\uFF0E\u79E6\u5E9C\u7BA1\u5BB6\u3000\u3000\u79E6\u5E73</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u79E6\u5E9C\u7BA1\u5BB6\u3000\u3000\u79E6\u5B89</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u3000\u3000\u79E6\u5E9C\u7BA1\u5BB6\u3000\u3000\u79E6\u5BCC</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        \u7F57\u5E9C\u5BB6\u5C06\u3000\u3000\u7F57\u6625</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\uFF14\uFF0E\u536B\u58EB\uFF0C\u6B66\u5C06\uFF0C\u5C0F\u5175\u65E0\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\uFF14\uFF0E\u79E6\u5E9C\u5BB6\u5C06\uFF0C\u5C0F\u7AE5\u82E5\u5E72</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3010\u5934\u8854\u3011</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u7537\uFF1A\u5C0F\u5175\uFF0C\u5C0F\u6821\uFF0C\u53C2\u5C06\uFF0C\u5C06\u519B\uFF0C\u63D0\u7763\uFF0C\u5143\u5E05\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u5973\uFF1A\u5973\u5175\uFF0C\u5973\u53C2\u5C06\uFF0C\u5DFE\u5E3C\u5C06\u519B\uFF0C\u5973\u63D0\u7763\uFF0C\u5973\u5E05\u3002</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6B66\u529F\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u6B66\u529F\u7B80\u4ECB" aria-hidden="true">#</a> \u6B66\u529F\u7B80\u4ECB</h2><table><thead><tr><th>\u57FA\u7840</th><th>\u7279\u6B8A</th></tr></thead><tbody><tr><td>\u62C6\u62DB\u5378\u529B\u4E4B\u6CD5</td><td><a href="#%E9%9C%B8%E7%8E%8B%E6%9E%AA">\u9738\u738B\u67AA</a>\uFF0C<a href="#%E5%AE%A3%E8%8A%B1%E4%B8%89%E6%96%A7">\u5BA3\u82B1\u4E09\u65A7</a>\uFF0C<a href="#%E6%97%A0%E7%A7%81%E9%94%8F%E6%B3%95">\u65E0\u79C1\u950F\u6CD5</a>\uFF0C<a href="#%E6%83%8A%E9%9B%B7%E9%9E%AD">\u60CA\u96F7\u97AD</a>\uFF0C<a href="#%E4%BA%94%E8%99%8E%E6%96%AD%E9%97%A8%E5%88%80">\u4E94\u864E\u65AD\u95E8\u5200</a></td></tr><tr><td>\u57FA\u672C\u8F7B\u529F</td><td><a href="#%E9%9B%81%E8%A1%8C%E6%AD%A5%E6%B3%95">\u96C1\u884C\u6B65\u6CD5</a></td></tr><tr><td>\u6251\u51FB\u683C\u6597\u4E4B\u6280</td><td><a href="#%E9%95%BF%E6%8B%B3">\u957F\u62F3</a></td></tr><tr><td>\u57FA\u672C\u67AA\u6CD5</td><td><a href="#%E9%9C%B8%E7%8E%8B%E6%9E%AA">\u9738\u738B\u67AA</a></td></tr><tr><td>\u57FA\u672C\u65A7\u6CD5</td><td><a href="#%E5%AE%A3%E8%8A%B1%E4%B8%89%E6%96%A7">\u5BA3\u82B1\u4E09\u65A7</a></td></tr><tr><td>\u57FA\u672C\u5200\u6CD5</td><td><a href="#%E4%BA%94%E8%99%8E%E6%96%AD%E9%97%A8%E5%88%80">\u4E94\u864E\u65AD\u95E8\u5200</a></td></tr><tr><td>\u57FA\u672C\u7BAD\u6CD5</td><td><a href="#%E8%BD%A9%E8%BE%95%E7%AE%AD%E6%B3%95">\u8F69\u8F95\u7BAD\u6CD5</a></td></tr><tr><td>\u57FA\u672C\u950F\u6CD5</td><td><a href="#%E6%97%A0%E7%A7%81%E9%94%8F%E6%B3%95">\u65E0\u79C1\u950F\u6CD5</a>\uFF0C<a href="#%E6%83%8A%E9%9B%B7%E9%9E%AD%E6%B3%95">\u60CA\u96F7\u97AD\u6CD5</a></td></tr><tr><td>\u57FA\u672C\u5251\u6CD5</td><td><a href="#%E6%99%93%E9%A3%8E%E6%AE%8B%E6%9C%88%E5%89%91">\u6653\u98CE\u6B8B\u6708\u5251</a></td></tr><tr><td>\u5185\u529F\u5FC3\u6CD5</td><td><a href="#%E5%86%B7%E6%B3%89%E5%BF%83%E6%B3%95">\u51B7\u6CC9\u5FC3\u6CD5</a></td></tr><tr><td>\u6CD5\u672F</td><td><a href="#%E5%85%AB%E5%8D%A6%E5%92%92">\u516B\u5366\u5492</a></td></tr></tbody></table><h3 id="\u957F\u62F3" tabindex="-1"><a class="header-anchor" href="#\u957F\u62F3" aria-hidden="true">#</a> \u957F\u62F3</h3><p>dodge 5 parry 5 force 75</p><p>\u957F\u62F3\u662F\u4EBA\u95F4\u6D41\u4F20\u6700\u5E7F\u6CDB\u7684\u62F3\u6CD5\uFF0C\u770B\u4F3C\u62DB\u5F0F\u5E73\u5E73\u65E0\u5947\uFF0C\u4F46\u9AD8\u624B\u4F7F\u6765\u4E00\u6837\u514B\u654C\u5236\u80DC\u3002</p><h3 id="\u65E0\u79C1\u950F" tabindex="-1"><a class="header-anchor" href="#\u65E0\u79C1\u950F" aria-hidden="true">#</a> \u65E0\u79C1\u950F</h3><p>dodge 5 parry -5 damage 25</p><p>\u539F\u540D\u79E6\u5BB6\u65E0\u654C\u950F\uFF0C\u4E3A\u79E6\u5BB6\u7956\u4F20\u79D8\u6280\uFF0C\u540E\u79E6\u743C\u51B3\u5B9A\u516C\u5F00\u4F20\u7ED9\u5927\u5510\u5B98\u5175\uFF0C\u7687\u4E0A<br> \u611F\u5176\u65E0\u79C1\uFF0C\u8D50\u540D\u65E0\u79C1\u950F\u6CD5\u3002\u6B64\u950F\u6CD5\u76F8\u5F53\u5B9E\u7528\uFF0C\u4E0A\u9635\u6740\u654C\uFF0C\u52BF\u5982\u7834\u7AF9\u3002<br> \u9700\u6FC0\u53D1\u51B7\u6CC9\u795E\u529F\u65B9\u53EF\u7EC3\u4E60\u3002</p><h3 id="\u60CA\u96F7\u97AD" tabindex="-1"><a class="header-anchor" href="#\u60CA\u96F7\u97AD" aria-hidden="true">#</a> \u60CA\u96F7\u97AD</h3><p>dodge -5 parry -5 damage 25</p><p>\u6B64\u97AD\u6CD5\u8BB2\u7A76\u6C14\u52BF\u529B\u5EA6\uFF0C\u4E3A\u540D\u5C06\u5C09\u8FDF\u606D\u4E4B\u62FF\u624B\u7EDD\u6280\uFF0C\u4F7F\u52A8\u5F00\u6765\u5A01\u98CE\u51DB\u51DB\uFF0C\u52BF\u96BE\u8FD1\u4EBA\u3002</p><h3 id="\u5BA3\u82B1\u4E09\u65A7" tabindex="-1"><a class="header-anchor" href="#\u5BA3\u82B1\u4E09\u65A7" aria-hidden="true">#</a> \u5BA3\u82B1\u4E09\u65A7</h3><p>dodge 20 parry -15 damage 35</p><p>\u9700\u662F\u7EAF\u5C06\u519B\u5E9C\u5F1F\u5B50\uFF0C\u6FC0\u53D1\u51B7\u6CC9\u5FC3\u6CD5\u65B9\u53EF\u5B66\u4E60\uFF0C\u53EA\u6709\u767D\u53D1\u8001\u4EBA\u4EB2\u4F20\u5F1F\u5B50\u65B9\u53EF\u81EA\u884C\u7EC3\u4E60\u3002<br> \u4FEE\u4E60\u4E09\u677F\u65A7\u7834\u8017\u6C14\u529B\uFF0C\u4E45\u7EC3\u5219\u635F\u4F24\u5185\u529B\u3002</p><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">    \u65E0\u654C\u4E09\u677F\u65A7</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF50\uFF45\uFF52\uFF46\uFF4F\uFF52\uFF4D\u3000\uFF53\uFF41\uFF4E\uFF42\uFF41\uFF4E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u51B7\u6CC9\u795E\u529F100\u4E14\u6FC0\u53D1\uFF0C\u5BA3\u82B1\u4E09\u65A7100\uFF0C\u6700\u5927\u5185\u529B1000\uFF0C\u5185\u529B500</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u5185\u529B210\uFF5E450\uFF0C\u4E0E\u6210\u529F\u5224\u5B9A\u6709\u5173</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u6210\u529F\u52191\uFF5E4\u79D2busy\uFF0C\u5931\u8D250\uFF5E4\u79D2busy\uFF0C\u798F\u7F18\u5927\u4E8E35\u540Ebusy\u6700\u77ED</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u63A5\u8FDE\u6325\u51FA\u4E09\u65A7\uFF0C\u6210\u529F\u5219\u9020\u6210\u65A7\u7C7B\u6C14\u8840\u8F6F\u4F24\u5BB3\u548C\u654C\u4EBA\u5F53\u524D\u6C14\u8840\u767E\u5206\u6BD4\u7684\u786C\u4F24\u5BB3</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7ED3\u675F\u540E\u989D\u5916\u8FDB\u884C\u4E00\u6B21\u666E\u901A\u653B\u51FB</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u547D\u4E2D\u7387\u56E0\u7D20\u6709\u65A7\u6CD5\u6709\u6548\u7EA7\uFF0C\u5BF9\u65B9\u683C\u6321\u6709\u6548\u7EA7</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u53CC\u65B9\u6B66\u5B66\u3001\u8182\u529B\u3001\u6251\u51FB\u683C\u6597\u7EA7\u522B\u3001\u540E\u5929\u798F\u7F18</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u4F24\u5BB3\u53D6\u51B3\u4E8E\u53CC\u65B9\u798F\u7F18</span></span>
<span class="line"></span></code></pre></div><h3 id="\u9738\u738B\u67AA" tabindex="-1"><a class="header-anchor" href="#\u9738\u738B\u67AA" aria-hidden="true">#</a> \u9738\u738B\u67AA</h3><p>dodge 10 parry -10 damage 25</p><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">\u2460  \u67AA\u91CC\u5939\u950F</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF50\uFF45\uFF52\uFF46\uFF4F\uFF52\uFF4D\u3000\uFF51\uFF49\uFF41\uFF4E\uFF47\uFF4A\uFF49\uFF41\uFF4E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u9738\u738B\u67AA100\uFF0C\u65E0\u79C1\u950F\u6216\u60CA\u96F7\u97AD100\uFF0C\u6700\u5927\u5185\u529B\u3001\u5185\u529B500\uFF0C\u7CBE\u795E250</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u88C5\u5907\u67AA\u4E3A\u6B66\u5668\uFF0C\u8EAB\u4E0A\u5E26\u6709\u950F\u5907\u7528\uFF08\u5FC5\u987Bid\u5E26mace\uFF09</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u5185\u529B100\uFF0C\u7CBE\u795E100\uFF0C1\uFF5E2\u79D2busy\uFF0C3\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u7528\u67AA\u6253\u51FA\u4E00\u62DB\u666E\u901A\u653B\u51FB\uFF0C\u518D\u7528\u950F\u6253\u51FA\u4E24\u62DB\u666E\u901A\u653B\u51FB\uFF0C\u6362\u56DE\u67AA\u505A\u6B66\u5668</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u82E5\u4F7F\u7528\u8005\u662F\u7EAF\u5C06\u519B\u5E9C\u5F1F\u5B50\uFF0C\u5219\u5728\u51FA\u950F\u524D\u5BFC\u81F4\u5BF9\u65B91\u79D2busy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2461  \u9738\u738B\u786C\u4E0A\u5F13</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF50\uFF45\uFF52\uFF46\uFF4F\uFF52\uFF4D\u3000\uFF42\uFF41\uFF57\uFF41\uFF4E\uFF47\uFF53\uFF48\uFF41\uFF4E\uFF47\uFF47\uFF4F\uFF4E\uFF47</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u7EAF\u5C06\u519B\u5E9C\uFF0C\u9738\u738B\u67AA120\uFF0C\u6700\u5927\u5185\u529B\u3001\u5185\u529B500\uFF0C\u7CBE\u795E300\uFF0C\u6FC0\u53D1\u51B7\u6CC9\u5FC3\u6CD5</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u5185\u529B300\uFF0C\u7CBE\u795E100\uFF0C2\uFF5E3\u79D2busy\uFF0C5\uFF5E15\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5BF9\u654C\u4EBA\u9020\u62101\u79D2busy\uFF0C\u7136\u540E\u53D1\u51FA5\u51FB</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7B2C\u4E00\u51FBdodge  -5\uFF5E-10    parry  -5\uFF5E-10    damage  20\uFF5E30</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7B2C\u4E8C\u51FBdodge  -5\uFF5E-15    parry  -5\uFF5E-15    damage  20\uFF5E40</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7B2C\u4E09\u51FBdodge  -5\uFF5E-20    parry  -5\uFF5E-20    damage  20\uFF5E50</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7B2C\u56DB\u51FBdodge  -5\uFF5E-25    parry  -5\uFF5E-25    damage  20\uFF5E60</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7B2C\u4E94\u51FBdodge  -5\uFF5E-30    parry  -5\uFF5E-30    damage  20\uFF5E70</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E94\u864E\u65AD\u95E8\u5200" tabindex="-1"><a class="header-anchor" href="#\u4E94\u864E\u65AD\u95E8\u5200" aria-hidden="true">#</a> \u4E94\u864E\u65AD\u95E8\u5200</h3><p>dodge 0 parry 0 damage 20</p><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">    \u4E94\u864E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF50\uFF45\uFF52\uFF46\uFF4F\uFF52\uFF4D\u3000\uFF57\uFF55\uFF48\uFF55</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u4E94\u864E\u5200120\u7EA7\uFF0C\u5185\u529B\u3001\u6700\u5927\u5185\u529B500\uFF0C\u7CBE\u795E250</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u5185\u529B250\uFF0C\u7CBE\u795E200\uFF0C\u6218\u6597\u4E2D\u4F7F\u75283\u79D2busy</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u589E\u52A0buff\uFF0C\u5200\u6CD5\u7EA7\u522B\u63D0\u5347\u4E94\u864E\u5200\u7EA7\u522BL\xD71/5\uFF0C\u6301\u7EEDL\xD71/2\u79D2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          buff\u65F6\u95F4\u5185\u7528\u4E94\u864E\u5200\u666E\u901A\u653B\u51FB\u4F1A\u8FDE\u7EED\u53D1\u51FA\u4E94\u5F0F\uFF0C\u4F24\u5BB3\u7D2F\u52A0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          dodge  0    parry  0  damage 100</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8F69\u8F95\u7BAD\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8F69\u8F95\u7BAD\u6CD5" aria-hidden="true">#</a> \u8F69\u8F95\u7BAD\u6CD5</h3><p>dodge 0 parry 0 damage 25</p><p>\u4F20\u8BF4\u4E3A\u8F69\u8F95\u9EC4\u5E1D\u6D41\u4F20\u4E4B\u7BAD\u6CD5\uFF0C\u7ECF\u5175\u5BB6\u5386\u4EE3\u4E0D\u65AD\u6539\u826F\uFF0C\u6700\u5229\u6218\u573A\u53AE\u6740</p><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">    \u8FDE\u73E0\u7BAD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF50\uFF45\uFF52\uFF46\uFF4F\uFF52\uFF4D\u3000\uFF4C\uFF49\uFF41\uFF4E\uFF5A\uFF48\uFF55</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u8F69\u8F95\u7BAD50\u7EA7\uFF0C\u6FC0\u53D1\u51B7\u6CC9\u5FC3\u6CD5\uFF0C\u5185\u529B400\uFF0C\u6C14\u8840200\uFF0C\u7BAD\u56CA\u67096\u652F\u4EE5\u4E0A\u7BAD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u5185\u529B200\uFF0C\u6C14\u8840100\uFF0C2\uFF5E3\u79D2busy\uFF0C4\uFF5E5\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5BF9\u5468\u56F4\u654C\u4EBA\u53D1\u52A8\u7FA4\u4F53\u653B\u51FB\uFF0C\u6700\u591A\u653B\u51FB5\u4EBA\uFF0C\u4E0D\u4F1A\u88AB\u53CD\u51FB</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u4E0D\u4F1A\u653B\u51FB\u73A9\u5BB6\u3001\u6655\u5012\u6216\u4E0D\u53EF\u89C1\u7684\u654C\u4EBA</span></span>
<span class="line"></span></code></pre></div><h3 id="\u51B7\u6CC9\u5FC3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u51B7\u6CC9\u5FC3\u6CD5" aria-hidden="true">#</a> \u51B7\u6CC9\u5FC3\u6CD5</h3><p>\u7531\u4E8E\u5C06\u519B\u4EEC\u7586\u573A\u4E0A\u51FA\u751F\u5165\u6B7B\uFF0C\u800C\u8EAB\u9677\u91CD\u56F4\u65F6\u5219\u4EE5\u4FDD\u8EAB\u4E3A\u91CD\uFF0C\u6240<br> \u4EE5\u521B\u51FA\u8FD9\u5957\u5FC3\u6CD5\uFF0C\u51B7\u53D6\u5176\u6C89\u7740\u51B7\u9759\u4E4B\u610F\uFF0C\u6CC9\u5219\u53D6\u5176\u8FDE\u7EF5\u4E0D\u7EDD\u3002</p><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">\u2460  \u9759\u5FC3\u8BC0\uFF1A</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF45\uFF58\uFF45\uFF52\uFF54\u3000\uFF4A\uFF49\uFF4E\uFF47\uFF58\uFF49\uFF4E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u5185\u529B200</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u5185\u529B100\uFF0C\u6218\u6597\u4E2D\u4F7F\u75283\u79D2busy</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u6740\u6C14\u964D\u4F4E\u51B7\u6CC9\u5FC3\u6CD5\u7EA7\u522BL/2\u70B9\uFF0C\u6700\u4F4E\u964D\u52301</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u589E\u52A0buff\uFF0C\u63D0\u9AD8L/5\u7684\u8F7B\u529F\u7EA7\u522B\uFF0C\u6301\u7EEDL\u79D2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2461  \u81EA\u7597\uFF1A\u3000exert heal</span></span>
<span class="line"></span></code></pre></div><h3 id="\u516B\u5366\u5492" tabindex="-1"><a class="header-anchor" href="#\u516B\u5366\u5492" aria-hidden="true">#</a> \u516B\u5366\u5492</h3><p>\u56E0\u516B\u5366\u5492\u4E3A\u5DE6\u9053\u65C1\u95E8\uFF0C\u5176\u6CD5\u672F\u8FD0\u8F6C\u8FDC\u4E0D\u5982\u4F5B\u6CD5\u9053\u6CD5\u822C\u968F\u5FC3\u6240\u6B32\uFF0C\u9700\u8981\u4EE5\u8840\u753B\u7B26<br> \u5728\u6843\u7B26\u7EB8\u4E0A\uFF0C\u7136\u540E\u5728\u6218\u6597\u4E2D\u796D\u4E4B\u3002\u6843\u7B26\u7EB8\u57CE\u5357\u6742\u8D27\u5E97\u4E2D\u6709\u5356\u3002</p><div class="language-mud ext-mud"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">    \u753B\u7B26  scribe </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u6CD5</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u7CBE\u795E\u3001\u6CD5\u529B100\uFF0C\u8EAB\u4E0A\u6709\u6843\u7B26\u7EB8\uFF0C\u4E0D\u5904\u4E8Eno_move\u72B6\u6001</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A1\u79D2no_move</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5C06\u6843\u7B26\u7EB8\u53D8\u6210\u5E26\u6709\u5BF9\u5E94\u7B26\u6CD5\u7684\u7B26\u7EB8\uFF0C\u4E00\u6B21\u53EF\u753B\u51FA\u591A\u5F20\u7B26</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5F97\u5230\u6570\u91CF=1+L+random(L)\uFF0CL=\u516B\u5366\u5492\u7EA7\u522B/100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u96F7\u7535\u7B26\u6570\u91CF=1+\u516B\u5366\u5492\u7EA7\u522B/20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u7EAF\u5C06\u519B\u5E9C\u5F1F\u5B50\uFF0C\u516B\u5366\u5492100\u7EA7\u4EE5\u4E0A\u4E0D\u9700\u8981\u7B26\u7EB8</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5404\u4E2A\u7B26\u6CD5\u7684CD\u4E3A\u5171\u7528CD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u7B26\u7B93\u771F\u6CD5\uFF0C\u636E\u767D\u53D1\u8001\u4EBA\u8A00\u5176\u4E3A\u5357\u534E\u8001\u4ED9\u6240\u521B\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2460  \u795E\u9704\u96F7\u7535\u7B26(light)\uFF1A\u4EE5\u8FDE\u7EED\u7B26\u7B93\u5316\u4F5C\u96F7\u58F0\u7535\u5149\u4F24\u5BB3\u654C\u4EBA\u7684\u7CBE\u795E\u6C14\u8840</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF4A\uFF49 </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">\u3000\uFF4F\uFF4E </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u4EBA\u7269</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C0\uFF5E1\u79D2busy\uFF0C3\uFF5E7\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u753550\u3001\u58F050\u6C14\u8840\u3001\u7CBE\u795E\u4F24\u5BB3\uFF0C\u547D\u4E2D\u6307\u65701.5\uFF0C\u5355\u6B21\u4F24\u5BB3\u6307\u65700.2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u8FDB\u884C\u8FDE\u7EED\u591A\u6B21\u653B\u51FB\uFF0C\u6BCF\u6B21\u6D88\u80171\u5F20\u7B26\uFF0C\u6700\u591A\u8FDE\u51FB\u968F\u673A8~10\u6B21</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u6B21\u6570=1+L+random(L)\uFF0CL=\u516B\u5366\u5492\u7EA7\u522B/100\uFF0C\u7B26\u4E0D\u8DB3\u65F6\u6309\u7B26\u6570\u91CF</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5927\u4E8E8\u65F6\u968F\u673A8\u30019\uFF1B\u5927\u4E8E9\u65F6\u968F\u673A8~10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2461  \u795E\u9704\u98CE\u6CD5\u7B26(wind)\uFF1A\u796D\u51FA\u72C2\u98CE\u5C06\u654C\u65B9\u5439\u8D70\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF4A\uFF49 </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">\u3000\uFF4F\uFF4E </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u4EBA\u7269</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100\uFF0C\u6CD5\u529B\u4FDD\u62A4\u5730\u70B9\u65E0\u6CD5\u4F7F\u7528</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C0\uFF5E1\u79D2busy\uFF0C3\uFF5E7\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5C06\u654C\u4EBA\u5439\u98DE\u5230\u53D6\u7ECF\u8DEF\u4E0A\u968F\u673A\u5730\u70B9\uFF0C\u5E76\u9020\u62102\u79D2busy</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u753B\u7B26\u8005\u7684\u6B66\u5B66\u3001\u6709\u6548\u6CD5\u672F\u3001enchant\u503C\uFF0C\u5BF9\u65B9\u9053\u884C\u3001\u6709\u6548\u8F7B\u529F\u3001\u6B66\u5B66\u3001\u540E\u5929\u798F\u7F18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2462  \u795E\u9704\u96E8\u6CD5\u7B26(rain)\uFF1A\u4F7F\u5929\u964D\u51B0\u96E8\u5C06\u654C\u65B9\u51BB\u4F4F\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF4A\uFF49 </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">\u3000\uFF4F\uFF4E </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u4EBA\u7269</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C0\uFF5E1\u79D2busy\uFF0C3\uFF5E7\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5C06\u654C\u4EBA\u51B0\u51BB\uFF0C\u6210\u529F\u65F6\u9020\u62103+random(L/2)\u79D2no_move\u3001no_perform</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5168\u4E2D\u65F6\uFF0C\u65F6\u95F4\u4E3A3+random(L)\u79D2\uFF0CL=\u516B\u5366\u5492\u7EA7\u522B/100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u51B0\u51BB\u65F6\u95F4\u65E0\u4E0A\u9650</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u6210\u529F\u7387\u53D6\u51B3\u4E8E\u81EA\u8EAB\u7684\u9053\u884C\u3001\u6709\u6548\u6CD5\u672F\u3001enchant\u503C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5BF9\u65B9\u9053\u884C\u3001\u6709\u6548\u8F7B\u529F\u3001\u6B66\u5B66\u3001\u540E\u5929\u798F\u7F18</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5BF9\u76F8\u7B49\u5C5E\u6027\u654C\u4EBA\u670975%\u51E0\u7387\u6210\u529F\uFF0C50%\u51E0\u7387\u5168\u4E2D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2463  \u4E94\u761F\u7B26(poison)\uFF1A\u4EE5\u5492\u8A00\u8840\u7B26\u4F7F\u654C\u65B9\u611F\u4E0A\u761F\u75AB\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF4A\uFF49 </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">\u3000\uFF4F\uFF4E </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u4EBA\u7269</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100\uFF0CL=\u516B\u5366\u5492\u7EA7\u522B+\u8FD0\u6BD2\u4E4B\u672F\u7EA7\u522B\u5927\u4E8E100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C0\uFF5E1\u79D2busy\uFF0C3\uFF5E7\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u4F7F\u654C\u4EBA\u4E2D\u5931\u5FC3\u761F\u6BD2\uFF0C\u6BD2\u7D20\u91CFL\uFF0C\u6301\u7EED\u65F6\u95F4L/3\u79D2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u53D1\u4F5C\u6548\u679C\u8BE6\u89C1help poison</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u6210\u529F\u7387\u53D6\u51B3\u4E8E\u753B\u7B26\u8005\u7684\u9053\u884C\u3001\u6709\u6548\u6CD5\u672F\u3001enchant\u503C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u5BF9\u65B9\u9053\u884C\u3001\u6709\u6548\u8F7B\u529F\u3001\u6B66\u5B66\u3001\u540E\u5929\u798F\u7F18</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u53CC\u65B9\u6700\u5927\u6CD5\u529B\u3001\u5F53\u524D\u7CBE\u795E\u4E0A\u9650\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2464  \u8FFD\u9B42\u7B26(find)\uFF1A\u4EE5\u771F\u8A00\u611F\u7B26\uFF0C\u80FD\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u5411\u4F60\u62A5\u544A\u67D0\u4EBA\u5F62\u8E2A\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF41\uFF54\uFF54\uFF41\uFF43\uFF48 </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u4EBA\u7269</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C3\uFF5E7\u79D2CD\uFF0C\u6BCF\u6B21\u63A5\u5230\u62A5\u544A\u6D88\u8017\u6CD5\u529B10\u3001\u7CBE\u795E10</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5728\u5BF9\u65B9\u8EAB\u540E\u8D34\u4E00\u4E2A\u7B26\uFF0C\u6BCF30\u79D2\u81EA\u52A8\u62A5\u544A\u5176\u6240\u5728\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u7B26\u4E0D\u5728\u5BF9\u65B9\u8EAB\u4E0A\u540E\u505C\u6B62\u62A5\u544A\u5E76\u6D88\u5931</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u753B\u7B26\u8005\u7684\u6B66\u5B66\u3001\u6709\u6548\u6CD5\u672F\u3001enchant\u503C\uFF0C\u5BF9\u65B9\u6B66\u5B66\u3001\u6709\u6548\u8F7B\u529F\u3001\u6B66\u5B66\u3001\u540E\u5929\u798F\u7F18</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u6839\u636E\u53CC\u65B9\u6CD5\u529B\u503C\u3001\u798F\u7F18\uFF0C\u5BF9\u65B9\u88AB\u8D34\u4E2D\u65F6\u6709\u673A\u4F1A\u5BDF\u89C9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2465  \u4F11\u6218\u7B26(peace)\uFF1A\u6218\u6597\u4E2D\u796D\u51FA\u6CD5\u7B26\u4EE5\u611F\u53EC\u654C\u65B9\u505C\u6218\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF42\uFF55\uFF52\uFF4E </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C3\uFF5E7\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u5468\u56F4\u654C\u4EBA\u505C\u6B62\u4E0E\u81EA\u5DF1\u6218\u6597</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u540E\u5929\u798F\u7F18+\u540E\u5929\u5B9A\u529B\u7684\u968F\u673A\u6570\u5927\u4E8E20\u5373\u6210\u529F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2466  \u9003\u547D\u7B26(escape)\uFF1A\u6218\u6597\u4E2D\u796D\u51FA\u6CD5\u7B26\uFF0C\u4E71\u4E2D\u9003\u547D\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6307\u4EE4\uFF1A\uFF42\uFF55\uFF52\uFF4E </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u3000\u3000\u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C2\uFF5E3\u79D2no_move\uFF0C3\uFF5E7\u79D2CD</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u56DE\u5230\u5C06\u519B\u5E9C\u82B1\u56ED\u5185</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u5F71\u54CD\uFF1A\u540E\u5929\u798F\u7F18+\u540E\u5929\u5B9A\u529B\u7684\u968F\u673A\u6570\u5927\u4E8E20\u5373\u6210\u529F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u2467  \u5929\u7532\u795E\u7B26\uFF08heaven\uFF09\uFF1A\u796D\u51FA\u540E\u5929\u795E\u9644\u4F53\uFF0C\u5200\u67AA\u4E0D\u5165\uFF0C\u6C34\u706B\u4E0D\u4FB5\u3002</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6307\u4EE4\uFF1A\uFF42\uFF55\uFF52\uFF4E\u3000</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">\u7B26\u540D</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6761\u4EF6\uFF1A\u6CD5\u529B\u3001\u7CBE\u795E100\uFF0C\u516B\u5366\u5492\u7EA7\u522B\uFF08L\uFF0950\u7EA7</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6D88\u8017\uFF1A\u6CD5\u529B50\uFF0C3\uFF5E7\u79D2CD\uFF0C\u6218\u6597\u4E2D\u4F7F\u75281\uFF5E2\u79D2busy</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    \u6548\u679C\uFF1A\u4EA7\u751F\u5929\u7532\u795E\u7B26buff\uFF0C\u6301\u7EEDL/3\u79D2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u589E\u52A0\u4F24\u5BB3\u3001\u9632\u5FA1\u5404L/6\u70B9</span></span>
<span class="line"><span style="color:#D8DEE9FF;">          \u589E\u52A0\u706B\u7CFB\u3001\u6C34\u7CFB\u6CD5\u672F\u767E\u5206\u6BD4\u6297\u6027(L/60)%\uFF0C\u6700\u9AD85%</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53DB\u5E08" tabindex="-1"><a class="header-anchor" href="#\u53DB\u5E08" aria-hidden="true">#</a> \u53DB\u5E08</h2><p>\u82E5\u8981\u79BB\u5F00\u5E08\u95E8\uFF0C\u9700\u8981\u627E\u79E6\u743C\uFF0C\u635F\u5931\u6B66\u5B665%\uFF08\u5C01\u987620k\uFF09</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><p>\u5C06\u519B\u5E9C\u5730\u56FE\uFF1Ahelp map-jjf</p>`,47);function E(t,D){const s=o("Contributors");return a(),l("div",null,[p(s,{names:["\u5434"]}),r])}var i=n(c,[["render",E],["__file","jjf.html.vue"]]);export{i as default};
