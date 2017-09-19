var marked = require('../lib/index')
  , should = require('should')

describe('marked-engine', function() {
  
  it('should export render', function() {
    marked.render.should.be.an.instanceOf(Function);
  })
  it('should export renderFile', function() {
    marked.renderFile.should.be.an.instanceOf(Function);
  })
  it('should alias __express to renderFile', function() {
    marked.__express.should.be.an.instanceOf(Function);
    marked.__express.should.be.equal(marked.renderFile);
  })
  
  describe('renderFile', function() {
    
    it('should render h1', function(done) {
      marked.renderFile(__dirname + '/fixtures/hello.md', {}, function(err, str) {
        if (err) return done(err);
        str.should.be.equal('<h1 id="hello">Hello</h1>\n');
        done();
      });
    })
    
    it('should error when rendering file that does not exist', function(done) {
      marked.renderFile(__dirname + '/fixtures/not-found.md', {}, function(err, str) {
        err.should.be.an.instanceOf(Error);
        should.not.exist(str)
        done();
      });
    })
    
  })
  
})
