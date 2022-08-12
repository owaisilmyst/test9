import * as React from "react";
import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { navigate } from "gatsby";
import * as styles from "../../styles/results-page.module.css";

export const ResultsPage: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  const onFickleflightLogoClick = useCallback(() => {
    navigate("./homepage");
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.resultsPageDiv}>
        <header className={styles.topHeader}>
          <div className={styles.topContainerDiv}>
            <img
              className={styles.fickleflightLogoIcon}
              alt=""
              src="fickleflight-logo1.svg"
              onClick={onFickleflightLogoClick}
            />
            <div className={styles.navigationRightDiv}>
              <div className={styles.navigationMenuDiv}>
                <div className={styles.exploreDiv}>Explore</div>
                <div className={styles.searchDiv}>Search</div>
                <div className={styles.searchDiv}>Hotels</div>
                <div className={styles.searchDiv}>Offers</div>
              </div>
              <div className={styles.accountSectionDiv}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="notification1.svg"
                />
                <img
                  className={styles.unsplashd1UPkiFd04AIcon}
                  alt=""
                  src="top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.searchFormSection}>
          <div className={styles.searchContainerDiv}>
            <div className={styles.bannerGradientDiv} />
            <img
              className={styles.bannerBackgroundIcon}
              alt=""
              src="banner-background@2x.png"
            />
            <div className={styles.searchSectionDiv}>
              <div className={styles.titleDiv}>
                <div className={styles.whereAreYouOffToo}>
                  Where are you off too?
                </div>
              </div>
              <div className={styles.searchFormDiv}>
                <div className={styles.inputsRowDiv}>
                  <div className={styles.inputGroupDiv}>
                    <Autocomplete
                      className={styles.departureFieldAutocomplete}
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className={styles.inputGroupDiv}>
                    <div className={styles.arrivalFieldDiv}>
                      <div className={styles.inputDiv}>
                        <div className={styles.labelContainerDiv}>
                          <div className={styles.arrivalDiv}>Arrival</div>
                        </div>
                        <div className={styles.activeDiv}>
                          <div className={styles.mUIAutocompleteTagDiv}>
                            <div className={styles.chipDiv}>
                              <div className={styles.containerDiv}>
                                <div className={styles.avatarDiv}>
                                  <div className={styles.oPDiv}>F</div>
                                </div>
                                <div className={styles.typographyDiv}>
                                  <div className={styles.chipDiv1}>Chip</div>
                                </div>
                                <img
                                  className={styles.notificationBellIcon}
                                  alt=""
                                  src="cancel.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.chipDiv}>
                              <div className={styles.containerDiv}>
                                <div className={styles.avatarDiv}>
                                  <div className={styles.oPDiv}>F</div>
                                </div>
                                <div className={styles.typographyDiv}>
                                  <div className={styles.chipDiv1}>Chip</div>
                                </div>
                                <img
                                  className={styles.notificationBellIcon}
                                  alt=""
                                  src="cancel.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.losAngelesLA}>
                            Los Angeles (LA)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputGroupDiv}>
                    <div className={styles.departureFieldAutocomplete}>
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            renderInput={{ placeholder: "01/05/2022" }}
                            helperText=""
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroupDiv}>
                  <div className={styles.searchFlightsButton}>
                    <div className={styles.buttonDiv}>Search flights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchResultsDiv}>
          <div className={styles.searchFiltersDiv}>
            <div className={styles.resultsSummaryDiv}>
              <div className={styles.resultsDiv}>10 out of 177 Results</div>
              <img className={styles.vectorIcon} alt="" src="vector-2.svg" />
            </div>
            <div className={styles.bookingOptionsDiv}>
              <b className={styles.resultsB}>Booking Options</b>
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel}
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel1}
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.flightExperienceDiv}>
              <b className={styles.resultsB1}>Flight Experience</b>
              <div className={styles.component1formcheckboxDiv}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.resultsDiv1}>No overnight flights</div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.resultsDiv2}>No long stop-overs</div>
              </div>
            </div>
            <div className={styles.airlinesDiv}>
              <b className={styles.resultsB2}>Airlines</b>
              <div className={styles.component1formcheckboxDiv}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.singaporeAirlinesDiv}>
                  Singapore Airlines
                </div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.singaporeAirlinesDiv}>Qatar Airways</div>
              </div>
            </div>
            <div className={styles.stopsDiv}>
              <b className={styles.resultsB3}>Stops</b>
              <div className={styles.component1formcheckboxDiv}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.singaporeAirlinesDiv}>1 Stop</div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.resultsDiv6}>2 Stops</div>
              </div>
            </div>
            <img className={styles.seperatorIcon} alt="" src="vector-5.svg" />
          </div>
          <div className={styles.flightCardsDiv}>
            <div className={styles.flightCardDiv}>
              <div className={styles.frameDiv}>
                <img className={styles.turkishIcon} alt="" src="turkish.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Turkish Airlines
                </div>
              </div>
              <div className={styles.frameDiv1}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>11:35 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="group-675.svg"
                  />
                  <div className={styles.h55MNonStop}>33H 10M, 1-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>4:45 PM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv2}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 723</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv}>
                <img className={styles.turkishIcon} alt="" src="sia.svg" />
                <div className={styles.singaporeAirlinesDiv1}>
                  Singapore Airlines
                </div>
              </div>
              <div className={styles.frameDiv4}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>8:45 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv4}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="group-6751.svg"
                  />
                  <div className={styles.h55MNonStop}>15H 10M, Non-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>7:55 PM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv5}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 900</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.frameDiv}>
                <img className={styles.japanIcon} alt="" src="japan.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Japan Airlines
                </div>
              </div>
              <div className={styles.frameDiv1}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>8:20 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv4}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="group-6751.svg"
                  />
                  <div className={styles.h55MNonStop}>17H 30M, Non-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>9:50 PM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv2}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.frameDiv}>
                <img className={styles.japanIcon} alt="" src="ana.svg" />
                <div className={styles.singaporeAirlinesDiv}>ANA</div>
              </div>
              <div className={styles.frameDiv1}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>6:35 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv4}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="group-6751.svg"
                  />
                  <div className={styles.h55MNonStop}>19H 15M, Non-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>9:50 PM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv2}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 936</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="americanairlines.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  American Airlines
                </div>
              </div>
              <div className={styles.frameDiv4}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>8:20 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="group-6754.svg"
                  />
                  <div className={styles.h55MNonStop}>17H 30M, 1-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>9:50 AM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv5}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 939</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.frameDiv}>
                <img className={styles.turkishIcon} alt="" src="turkish.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Turkish Airlines
                </div>
              </div>
              <div className={styles.frameDiv1}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>11:35 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="group-6754.svg"
                  />
                  <div className={styles.h55MNonStop}>33H 10M, 1-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>4:45 PM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv2}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 673</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.frameDiv}>
                <img className={styles.japanIcon} alt="" src="japan.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Japan Airlines
                </div>
              </div>
              <div className={styles.frameDiv1}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>10:25 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="group-6754.svg"
                  />
                  <div className={styles.h55MNonStop}>26H 45M, 1-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>9:10 AM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv2}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="americanairlines1.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  American Airlines
                </div>
              </div>
              <div className={styles.frameDiv4}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>10:25 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="group-6754.svg"
                  />
                  <div className={styles.h55MNonStop}>26H 45M, 1-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.aMDiv}>9:10 AM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv5}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.primaryButtonDiv}>
              <div className={styles.rectangleDiv6} />
              <div className={styles.searchFlightsDiv}>Show more results</div>
            </div>
          </div>
        </div>
        <div className={styles.footerSectionDiv}>
          <div className={styles.formTextDiv}>
            <div className={styles.newsletterFormSection}>
              <img
                className={styles.newsletterSectionBackground}
                alt=""
                src="newsletter-section-background@2x.png"
              />
              <div className={styles.subscribeFormDiv}>
                <div className={styles.formHeaderDiv}>
                  <b className={styles.formTitleSubtext}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitleB}>Get weekly updates</b>
                </div>
                <div className={styles.formDiv}>
                  <div className={styles.formTextDiv}>
                    <div className={styles.fillInYourDetailsToJoinT}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFieldsDiv}>
                    <div className={styles.formTextDiv}>
                      <TextField
                        className={styles.inputTextField}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className={styles.formTextDiv}>
                      <TextField
                        className={styles.inputTextField}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className={styles.button}>
                    <div className={styles.unstyledButtonDiv}>
                      <div className={styles.buttonDiv1}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleFlightBioDiv}>
                <img className={styles.logoIcon} alt="" src="logo1.svg" />
                <div className={styles.fickleFlightIsYourOneStop}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="social-icons1.svg"
                />
              </div>
              <div className={styles.seperatorDiv} />
              <div className={styles.footerLinksDiv}>
                <div className={styles.companyDiv}>
                  <a className={styles.aboutUs}>About Us</a>
                  <div className={styles.companyDiv1}>Company</div>
                  <div className={styles.newsDiv}>News</div>
                  <div className={styles.careersDiv}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.companyDiv}>
                  <div className={styles.accountDiv}>Account</div>
                  <div className={styles.supportDiv1}>Support</div>
                  <div className={styles.supportCenterDiv}>Support Center</div>
                  <div className={styles.fAQDiv}>FAQ</div>
                  <div className={styles.accessibilityDiv}>Accessibility</div>
                </div>
                <div className={styles.moreDiv}>
                  <div className={styles.covidAdvisoryDiv}>Covid Advisory</div>
                  <div className={styles.moreDiv1}>More</div>
                  <div className={styles.airlineFeesDiv}>Airline Fees</div>
                  <div className={styles.tipsDiv}>Tips</div>
                  <div className={styles.howWeWork}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
