import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { GlobalErrorHandler } from "./components/GlobalErrorHandler";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WheelPage from "./pages/WheelPage";
import WheelsPage from "./pages/WheelsPage";
import TeamsPage from "./pages/TeamsPage";
import TeamGeneratorPage from "./pages/TeamGeneratorPage";
import PresetsPage from "./pages/PresetsPage";
import ClassroomPage from "./pages/ClassroomPage";
import WidgetPage from "./pages/WidgetPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CustomizationPage from "./pages/CustomizationPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import BlogPostClassroom from "./pages/BlogPostClassroom";
import BlogPostRaffles from "./pages/BlogPostRaffles";
import BlogPostTeamBuilding from "./pages/BlogPostTeamBuilding";
import BlogPostPsychology from "./pages/BlogPostPsychology";
import BlogPostWeighted from "./pages/BlogPostWeighted";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wheel/new" component={WheelPage} />
      <Route path="/wheels" component={WheelsPage} />
      <Route path="/teams" component={TeamsPage} />
      <Route path="/team-generator" component={TeamGeneratorPage} />
      <Route path="/presets" component={PresetsPage} />
      <Route path="/classroom" component={ClassroomPage} />
      <Route path="/widget" component={WidgetPage} />
      <Route path="/analytics" component={AnalyticsPage} />
      <Route path="/customize" component={CustomizationPage} />
      <Route path="/trending" component={LeaderboardPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/spin-wheels-in-classrooms" component={BlogPostClassroom} />
      <Route path="/blog/how-to-run-fair-raffles" component={BlogPostRaffles} />
      <Route path="/blog/team-building-with-spin-wheels" component={BlogPostTeamBuilding} />
      <Route path="/blog/psychology-of-random-selection" component={BlogPostPsychology} />
      <Route path="/blog/weighted-spin-wheels-explained" component={BlogPostWeighted} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <GlobalErrorHandler />
            <Toaster />
            <div className="flex flex-col min-h-screen">
              <Router />
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
