// export default function sum(items) {
//   let result = 0
//   for (const item of items) {
//     result += item
//   }
//   return result
// }
export default function getHealthStatus({ name, health }) {
  if (health > 50) {
    return 'healthy'
  }
  if (health >= 15) {
    return 'wounded'
  }
  return 'critical'
}
