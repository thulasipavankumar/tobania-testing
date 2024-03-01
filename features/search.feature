Feature: Searching for a Keyword on Tobania Website

    As a user I want to search for a keyword in tobania website

    @test
    Scenario: Search for a keyword by click on search icon
        Given User visits tobania website
        When User enters a keyword in the search bar and clicks the search icon 
        |Query string | Test Autoamtion |
        Then user should see relevant search results
        And user clicks on the top result for more information

    @test
    Scenario: Search for a keyword by pressing enter
        Given User visits tobania website
        When User enters a keyword in the search bar and presses enter
        |Query string | Test Autoamtion |
        Then user should see relevant search results
        And user clicks on the top result for more information
        
    @test
    Scenario: Search for a keyword by pressing enter
        Given User visits tobania website
        When User enters a keyword in the search bar
        |Query string | Test Autoamtion |
        And presses enter
        Then user should see relevant search results
        And user clicks on the top result for more information

    @test
    Scenario: Search for a keyword by pressing enter
        Given User visits tobania website
        When User enters a keyword in the search bar
        |Query string | Test Autoamtion |
        And clicks the search icon
        Then user should see relevant search results
        And user clicks on the top result for more information


