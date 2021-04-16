define([
  'core/js/views/questionView'
], function(QuestionView) {

  var MyGameView = QuestionView.extend({

    events: {
      'focus .js-textinput-textbox': 'clearValidationError',
      'change .js-textinput-textbox': 'onInputChanged',
      'keyup .js-textinput-textbox': 'onInputChanged'
    },

    resetQuestionOnRevisit: function() {
      this.resetQuestion();
    },

    setupQuestion: function() {
    },

    disableQuestion: function() {
    },

    enableQuestion: function() {
    },

    onQuestionRendered: function() {
      this.setReadyStatus();
    },

    clearValidationError: function() {
      this.$('.js-textinput-textbox').removeClass('has-error');
    },

    // Blank method for question to fill out when the question cannot be submitted
    onCannotSubmit: function() {
      this.showValidationError();
    },

    showValidationError: function() {
      this.$('.js-textinput-textbox').addClass('has-error');
    },

    // This is important and should give the user feedback on how they answered the question
    // Normally done through ticks and crosses by adding classes
    showMarking: function() {
      if (!this.model.get('_canShowMarking')) return;
    },

    // Used by the question view to reset the look and feel of the component.
    resetQuestion: function() {
      this.$('.js-textinput-textbox').prop('disabled', !this.model.get('_isEnabled')).val('');

      this.model.set({
        _isCorrect: undefined
      });

      this.model.setCorrectAnswer();
    },

    showCorrectAnswer: function() {
    },

    hideCorrectAnswer: function() {
    },

    onInputChanged: function(e) {
      this.model.setUserAnswer(this.$('#answer').val());
    }

  });

  return MyGameView;

});