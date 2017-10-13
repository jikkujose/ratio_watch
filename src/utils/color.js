export default function color(red, green, blue) {
  return alpha => `rgba(${red}, ${green}, ${blue}, ${alpha / 100})`
}
