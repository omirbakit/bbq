import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'bootstrap/dist/js/bootstrap'
import '../stylesheets/application'

Rails.start()
ActiveStorage.start()
