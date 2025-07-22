function add() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById('result').textContent = '请输入两个有效数字';
    return;
  }
  const sum = a + b;
  document.getElementById('result').textContent = `结果是：${sum}`;
}
