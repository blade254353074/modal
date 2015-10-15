# modal
```
/**
 * 模态框
 * @method    show
 * @param     {String}   title:   ''            标题，接受字符串和HTML字符串
 * @param     {String}   content: ''            内容，接受字符串和HTML字符串
 * @optional  {String}   size:    'sm'          大小，默认为小[sm]，可选中等[md]、大[lg]
 * @optional  {String}   type:    ''            模式，[info](仅确定) [warning](取消和红色确定) [confirm](取消和蓝色确定) or [](什么都没有)
 * @optional  {String}   quick:   true          快速模式，点击模态框背景退出模态框，若为false，则需要点击x才可以关闭
 * @optional  {Function} before:  func          模态框加载之前触发
 * @optional  {Function} after:   func          模态框加载之后触发
 * @optional  {Function} cancel:  func          点击取消按钮后触发
 * @optional  {Function} confirm: func          点击确认按钮后触发
 * @optional  {Function} hide:    func          模态框隐藏之后触发
 * @method    hide
 *
 */
modal.show({
    title: '标题',
    content: '内容',
    type: 'confirm',
    size: 'md',
    before: function() { },
    after: function() { },
    cancel: function() {},
    confirm: function() { },
    hide: function() { }
});
```
# Start
1. npm install 
2. gulp or gulp watch
3. open dest/index.html

# demo
[http://blade254353074.github.io/modal/](http://blade254353074.github.io/modal/)
