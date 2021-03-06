var suite = require('./kasperle').suite();

suite.run('/', function(test, waitFor) {

    waitFor(function() {
        return suite.exists('#splash-overlay.hide');
    });

    test('Clicking on feedback displays overlay', function(assert) {
        suite.press('#site-footer .submit-feedback');
        assert.visible('#feedback-overlay');
        assert.visible('.feedback-form textarea');
        assert.selectorExists('.feedback-form button[disabled]');
    });

    test('Verify form is submitted', function(assert) {
        suite.fill('.feedback-form', {'feedback': 'test'});
        assert.selectorExists('.feedback-form button:not([disabled])');
    });
});
