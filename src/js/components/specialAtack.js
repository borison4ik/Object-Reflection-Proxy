export default function specialAtack(object) {
  if (Object.prototype.hasOwnProperty.call(object, 'special')) {
    return object.special.map((skill) => {
      const { id, name, icon, description = 'Описание недоступно' } = skill;

      return { id, name, icon, description };
    });
  }
  return false;
}
