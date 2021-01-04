<template>
  <v-form>
    <v-row class="upsert-curriculum-container">
      <v-col cols="12"
             sm="8"
             offset-sm="2"
             md="6"
             offset-md="3">
        <div class="row-header-div">
          <h1>New Curriculum</h1>
          <v-btn>Save</v-btn>
        </div>
        <div class="upsert-curriculum-definition-div">
          <v-row>
            <v-col cols="4">
              <v-subheader>Name</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field label="Curriculum Name"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-subheader>Goal</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field label="Curriculum Goal"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea label="Curriculum Description"
                          counter
                          maxlength="120"
                          full-width
                          outlined
                          single-line></v-textarea>
            </v-col>
          </v-row>
        </div>
        <div class="upsert-curriculum-card-div">
          <h3>Curriculum 1</h3>
          <v-card>
            <v-row no-gutters>
              <v-col cols="4">
                <v-subheader>Name</v-subheader>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Section"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-subheader>Topic</v-subheader>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Topic"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text-field label="Enter Resource Link"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text> Resource Links entered will loop here!!</v-text>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn>
                Add Project
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-btn class="upsert-curriculum-footer-section">
            Add Section
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>
