import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { destinations, tours } from '@/data/mockData';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check, User, Mail, Phone, MapPin, Users, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const destinationId = searchParams.get('destination');
  const tourId = searchParams.get('tour');

  const destination = destinationId ? destinations.find(d => d.id === destinationId) : null;
  const tour = tourId ? tours.find(t => t.id === tourId) : null;
  const tourDestination = tour ? destinations.find(d => d.id === tour.destinationId) : null;

  const selectedItem = tour || destination;
  const displayDestination = tourDestination || destination;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: 2,
    startDate: undefined as Date | undefined,
    specialRequests: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    toast.success('Booking confirmed! Check your email for details.');
    setStep(4);
  };

  const basePrice = tour?.price || (destination?.averagePrice || 100) * 5;
  const totalPrice = basePrice * formData.travelers;

  if (!selectedItem) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">No destination selected</h1>
          <Link to="/destinations">
            <Button>Browse Destinations</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div 
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors',
                  step >= s 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {step > s ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 4 && (
                <div className={cn(
                  'w-16 md:w-24 h-1 mx-2',
                  step > s ? 'bg-primary' : 'bg-muted'
                )} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-6">Traveler Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="pl-10"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="pl-10"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <div className="relative mt-2">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <select
                        id="travelers"
                        value={formData.travelers}
                        onChange={(e) => handleInputChange('travelers', Number(e.target.value))}
                        className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal mt-2',
                            !formData.startDate && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-5 w-5" />
                          {formData.startDate ? format(formData.startDate, 'PPP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(date) => handleInputChange('startDate', date)}
                          disabled={(date) => date < new Date()}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="mt-2"
                    placeholder="Any dietary requirements, accessibility needs, or other requests..."
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={() => setStep(2)} 
                  className="w-full mt-8 h-12 text-lg"
                  disabled={!formData.firstName || !formData.email}
                >
                  Continue to Payment
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-6">Payment Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative mt-2">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="pl-10"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="mt-2"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="mt-2"
                        placeholder="123"
                        type="password"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mt-4">
                  🔒 Your payment information is secure and encrypted
                </p>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-12">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 h-12 text-lg">
                    Review Booking
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-6">Review Your Booking</h2>
                
                <div className="space-y-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Traveler Information</h3>
                    <p className="text-muted-foreground">{formData.firstName} {formData.lastName}</p>
                    <p className="text-muted-foreground">{formData.email}</p>
                    <p className="text-muted-foreground">{formData.phone}</p>
                    <p className="text-muted-foreground">{formData.travelers} traveler(s)</p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Trip Details</h3>
                    <p className="text-muted-foreground">{tour?.name || `Trip to ${destination?.name}`}</p>
                    <p className="text-muted-foreground">
                      {formData.startDate ? format(formData.startDate, 'PPP') : 'Date not selected'}
                    </p>
                    {formData.specialRequests && (
                      <p className="text-muted-foreground mt-2">
                        <strong>Special requests:</strong> {formData.specialRequests}
                      </p>
                    )}
                  </div>

                  <div className="bg-travel-blue-light rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-primary">${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1 h-12">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} className="flex-1 h-12 text-lg bg-travel-green hover:bg-travel-green/90">
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="bg-card rounded-xl p-8 shadow-lg text-center animate-fade-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-travel-green flex items-center justify-center">
                  <Check className="h-10 w-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for booking with Owais Usman Travel Agency. 
                  A confirmation email has been sent to {formData.email}.
                </p>
                <p className="text-foreground font-semibold mb-8">
                  Booking Reference: OUTA-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </p>
                <Link to="/">
                  <Button size="lg">Back to Home</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <aside>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg sticky top-24">
              <img
                src={displayDestination?.image}
                alt={displayDestination?.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {tour?.name || displayDestination?.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  {displayDestination?.country}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base price</span>
                    <span className="text-foreground">${basePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Travelers</span>
                    <span className="text-foreground">× {formData.travelers}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-3 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary text-xl">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {tour && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {tour.included.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Check className="h-4 w-4 text-travel-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
