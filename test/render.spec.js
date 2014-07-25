var Ect = require('../');


describe('render', function () {
  it('should create a rendering from a template string', function () {
    var template_str = 'What <%- @x %> up.';
    var data = { 'x': 'XX' };

    var ect = new Ect();
    var rendering = ect.renderFromString(template_str, data);
    expect(rendering).to.be('What XX up.');
  });


  it('should create a rendering from a template string and call back', function () {
    var template_str = 'What <%- @x %> up.';
    var data = { 'x': 'XX' };

    var ect = new Ect();
    ect.renderFromString(template_str, data, function (err, rendering) {
      expect(err).to.not.be.ok();
      expect(rendering).to.be('What XX up.');
    });
  });
});
