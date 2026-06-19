function Date1() {
  return <p className="text-center">Today is {new Date().toLocaleDateString()} {" "} {new Date().toLocaleTimeString()} </p>;
}

export default Date1;