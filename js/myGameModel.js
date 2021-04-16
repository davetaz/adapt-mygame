define([
  'core/js/models/questionModel'
], function(QuestionModel) {

  var MyGameModel = QuestionModel.extend({

    init: function() {
      QuestionModel.prototype.init.call(this);
      this.setCorrectAnswer();
    },

    canSubmit: function() {
      return true;
    },

    setCorrectAnswer: function() {
      var min = this.get('_minNumber');
      var max = this.get('_maxNumber');
      var range = (max - min) + 1;
      var random = Math.floor((Math.random() * range) + min);
      console.log('setting correct answer to: ' + random);
      this.set({
        _correctAnswer: random
      });
    },

    getCorectAnswer: function () {
      return this.get('_correctAnswer');
    },

    setUserAnswer: function(answer) {
      this.set('_userAnswer',answer);
    },

    getUserAnswer: function() {
      return this.get('_userAnswer');
    },

    isCorrect: function() {
      var userAnswer = this.getUserAnswer();
      if (userAnswer == this.getCorectAnswer()) {
        this.set("_isCorrect",true);
      }
      console.log("The user answered: " + userAnswer + " (correct answer is: " + this.getCorectAnswer() + ")");
      return(this.get('_isCorrect'));
    },

    setupCorrectFeedback() {
      var context = { "number": this.getCorectAnswer() };
      this.set({
        feedbackTitle: this.getFeedbackTitle(),
        feedbackMessage: Handlebars.compile(this.get('_feedback').correct)(context)
      });
    },

    setAttemptSpecificFeedback(feedback) {
      var context = { "number": this.getCorectAnswer() };
      const body = (this.get('_attemptsLeft') && feedback.notFinal) || feedback.final;

      this.set({
        feedbackTitle: this.getFeedbackTitle(),
        feedbackMessage: Handlebars.compile(body)(context)
      });
    }

  }, {
    genericAnswerIndexOffset: 65536
  });

  return MyGameModel;

});
