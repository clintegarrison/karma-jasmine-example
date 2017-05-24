'use strict'

describe('Say Something', function(){
  beforeEach(function() {
    window.talk.init();
  });

  it('should say something', function(){
    var result = document.getElementById('my-div').innerHTML
    expect(result).toBe('something')
  })
})
