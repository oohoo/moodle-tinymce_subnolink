/**
 * This tinyMCE plugin is designed to detect anchor elements which are produced by the subordinate plugin
 * and replace the anchor element with plain text value and to remove all data associated with this subordinate and
 * any nested subordinates within the data.
 *
 * @author Ga Young Kim
 */

(function() {
    // Do not load language pack in moodle plugins.

    tinymce.create('tinymce.plugins.moodlesubnolinkPlugin', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {
            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceMoodleNolink');
            ed.addCommand('mceMoodleSubNolink', function() {
                // give confirmation dialog to check user's intentions
                $("<div class='dialogs' id='msm_remove_sub'> <span class='ui-icon ui-icon-alert' style='float: left; margin: 0 7px 20px 0;'></span>Are you sure that you would like to remove this subordinate and all the other subordinate associated with it? </div>").appendTo('#msm_editor_middle');
                $( "#msm_remove_sub" ).dialog({
                    resizable: false,
                    height:180,
                    modal: true,
                    buttons: {
                        "Yes": function() {
                            // js function in the msm/js/editorMethods/nosubordinate.js
                            removeSubordinate(ed)
                            $(this).dialog("close");
                        },
                        "No": function() {
                            $(this).dialog("close");
                        }
                    }
                });
            });

            // Register moodlenolink button
            ed.addButton('moodlesubnolink', {
                title : 'moodlesubnolink.desc',
                cmd : 'mceMoodleSubNolink',
                image : url + '/img/ed_nolink.gif'
            }); 

            // enable the button when anchor element is highlighted
            ed.onNodeChange.add(function(ed, cm, n) {
                var selectedNode = null;
        
                if($.browser.msie)
                {
                    selectedNode = ed.selection.getNode().childNodes[0].tagName;
                }
                else
                {
                    selectedNode = ed.selection.getNode().tagName;
                }
    
                if(selectedNode == "A")
                {
                    cm.setDisabled('moodlesubnolink', false);
                }
                else
                {
                    cm.setActive('moodlesubnolink', false);
                    cm.setDisabled('moodlesubnolink', true);
                }
            });
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'Remove Suobrdinate Plugin',
                author : 'Ga Young Kim',
                authorurl : 'http://ualberta.ca ',
                version : "1.0"
            };
        }
    });

    // Register plugin.
    tinymce.PluginManager.add('moodlesubnolink', tinymce.plugins.moodlesubnolinkPlugin);
})();
