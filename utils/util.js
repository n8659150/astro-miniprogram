const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isPlainObject = target =>
  target &&
  target.toString() == '[object Object]' &&
  Object.getPrototypeOf(target) == Object.prototype;
const _jsonify = target => {
  if (target && typeof target.toJSON === 'function') return target.toJSON();
  if (Array.isArray(target)) return target.map(_jsonify);
  return target;
};

const jsonify = target =>
  isPlainObject(target)
    ? Object.keys(target).reduce(
      (result, key) => ({
        ...result,
        [key]: _jsonify(target[key])
      }),
      {}
    )
    : _jsonify(target);

module.exports = {
  formatTime: formatTime,
  jsonify,
  getDataForRender
}
