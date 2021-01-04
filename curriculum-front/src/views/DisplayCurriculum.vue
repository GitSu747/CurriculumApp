<template>
    <v-row class="display-curriculum-container">
      <v-col cols="12"
             sm="8"
             offset-sm="2"
             md="6"
             offset-md="3">
        <div class="row-header-div">
          <h1>Curriculum Name</h1>
          <v-text>
            This is just some description for the curriculum
          </v-text>
        </div>
        <v-row>
          <v-col>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Section 1
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list subheader
                          two-line
                          flat>
                    <v-subheader>Projects</v-subheader>

                    <v-list-item-group multiple>
                      <v-list-item>
                        <template v-slot:default="{ active, }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active"
                                        color="primary"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Project 1</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                      <v-list-item>
                        <template v-slot:default="{ active, }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active"
                                        color="primary"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Project 2</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                      <v-list-item>
                        <template v-slot:default="{ active, }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active"
                                        color="primary"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Project 3</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Section 1
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list subheader
                          two-line
                          flat>
                    <v-subheader>Projects</v-subheader>

                    <v-list-item-group multiple>
                      <v-list-item>
                        <template v-slot:default="{ active, }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active"
                                        color="primary"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Project 1</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                      <v-list-item>
                        <template v-slot:default="{ active, }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active"
                                        color="primary"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Project 2</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                      <v-list-item>
                        <template v-slot:default="{ active, }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active"
                                        color="primary"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Project 3</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>
