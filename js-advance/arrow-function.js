var person = {
  firstName: 'Huy',
  lastName: 'Tung',
  showName: function () {
    const run = () => {
      console.log(this.firstName, this.lastName)
    }

    run()
  }
}

person.showName()

// function a(_param1) {
//   return _param1.toLowerCase()
// }

// const a = _param1 => _param1.toLowerCase()