$(document).ready(function() {
    'use strict';

    var website = openerp.website;
    website.add_template_file('/website_tip/static/src/xml/website.editor.xml');

    website.editor.RTELinkDialog = website.editor.RTELinkDialog.extend({
        tip_text: false,
        tip_position: false,
        tip_background: false,
        tip_color: false,
        events: _.extend({}, website.editor.RTELinkDialog.prototype.events, {
            'change input#link-tip-text': function(e) {
                this.tip_text = $(e.target).val();
            },
            'change input[name="link-tip-position"]': function(e) {
                this.tip_position = $(e.target).val();
            },
            'change input#link-tip-background': function(e) {
                this.tip_background = $(e.target).val();
            },
            'change input#link-tip-color': function(e) {
                this.tip_color = $(e.target).val();
            }
        }),
        bind_data: function() {
            var self = this;
            this._super();
            var tip_text = this.element ? this.element.getAttribute('data-tipso') : '';
            var tip_position = this.element ? this.element.getAttribute('data-tipso-position') : '';
            var tip_background = this.element ? this.element.getAttribute('data-tipso-background') : '';
            var tip_color = this.element ? this.element.getAttribute('data-tipso-color') : '';
            this.$('input#link-tip-text').val(tip_text).trigger('change');
            this.$('input[name="link-tip-position"][value="' + tip_position + '"]').prop('checked', true).trigger('change');
            this.$('input#link-tip-background').val(tip_background).trigger('change');
            this.$('input#link-tip-color').val(tip_color).trigger('change');
        },
        save: function() {
            var self = this;
            this._super();

            if (!this.element) {
                var element;
                if ((element = this.get_selected_link()) && element.hasAttribute('href')) {
                    this.editor.getSelection().selectElement(element);
                }
                this.element = element;
            }
            if (this.element) {
                this.element.setAttributes({
                    'data-tipso': this.tip_text || '',
                    'data-tipso-position': this.tip_position || '',
                    'data-tipso-background': this.tip_background || '',
                    'data-tipso-color': this.tip_color || ''
                });
            }
        }
    });
});