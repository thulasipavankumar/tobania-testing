Feature: Searching for a Keyword on Tobania Website

    As a user I want to search for a keyword into the tobania website

    @test
    Scenario: Search for a keyword by click on search icon
        Given User visit tobania website
        When User enters the keyword in the search bar and clicks the search icon 
        |Query string | Test Autoamtion |
        Then user should see relevant search results
        And user clicks on the top result for more information

    @test
    Scenario: Search for a keyword by pressing enter
        Given User visit tobania website
        When User enters the keyword in the search bar and presses enter
        |Query string | Test Autoamtion |
        Then user should see relevant search results
        And user clicks on the top result for more information
